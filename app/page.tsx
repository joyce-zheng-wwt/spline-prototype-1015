'use client';
import { useRef, useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import type { Application } from '@splinetool/runtime';
import { usePathname } from 'next/navigation';

export default function Home() {
  const splineRef = useRef<Application | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const initialCameraState = useRef<{ x: number; y: number; z: number; radius: number } | null>(null);
  const pathname = usePathname();
  
  // Extract basePath from next.config.js
  const basePath = '/greentally';

  function onLoad(spline: Application) {
    splineRef.current = spline;
    setIsLoaded(true);
    
    // Store initial camera position
    const camera = (spline as any)._camera;
    if (camera && camera.position) {
      const x = camera.position.x;
      const z = camera.position.z;
      const radius = Math.sqrt(x * x + z * z);
      initialCameraState.current = {
        x,
        y: camera.position.y,
        z,
        radius
      };
      console.log('Initial camera state saved:', initialCameraState.current);
    }
    
    // Disable user controls (rotate, pan, zoom)
    const controls = (spline as any)._controls;
    if (controls) {
      controls.enabled = false;
      controls.enableRotate = false;
      controls.enablePan = false;
      controls.enableZoom = false;
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (splineRef.current && initialCameraState.current) {
        // Calculate rotation based on scroll position
        const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        // Rotate only 90 degrees (Math.PI / 2) instead of full 360
        const rotationAmount = Math.PI / 4; // 45 degrees total rotation
        const angle = (scrollProgress - 0.5) * rotationAmount; // Center the rotation around initial position
        
        // Calculate initial angle from initial position
        const initialAngle = Math.atan2(initialCameraState.current.x, initialCameraState.current.z);
        const newAngle = initialAngle + angle;
        
        // Access the camera via _camera property
        const camera = (splineRef.current as any)._camera;
        if (camera && camera.position) {
          // Orbit camera around origin while maintaining original distance and height
          camera.position.x = Math.sin(newAngle) * initialCameraState.current.radius;
          camera.position.y = initialCameraState.current.y; // Keep original height
          camera.position.z = Math.cos(newAngle) * initialCameraState.current.radius;
          camera.lookAt(0, 0, 0); // Look at center
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <div className="spline-container">
        <Spline
          scene={`${basePath}/scene.splinecode`}
          wasmPath={`${basePath}/`}
          onLoad={onLoad}
        />
      </div>
      
      <div className="content">
        <section className="hero">
          <h1>GreenTally</h1>
          <p className="tagline">Your Ultimate Golf Companion</p>
        </section>

        <section className="feature">
          <h2>Track Your Game</h2>
          <p>
            Keep detailed statistics of every round. Track your scores, fairways hit, 
            greens in regulation, putts, and more. Analyze your performance with 
            comprehensive charts and insights.
          </p>
        </section>

        <section className="feature">
          <h2>Smart Course Management</h2>
          <p>
            Access detailed course maps with GPS yardages. Get intelligent club 
            recommendations based on your personal distances. Plan your shots 
            strategically with elevation and wind data.
          </p>
        </section>

        <section className="feature">
          <h2>Compete & Improve</h2>
          <p>
            Challenge friends with live leaderboards. Track your handicap automatically. 
            Set goals and monitor your progress with personalized improvement plans. 
            Join tournaments and compete with golfers worldwide.
          </p>
        </section>

        <section className="feature">
          <h2>Course Discovery</h2>
          <p>
            Discover new courses in your area or plan your golf trips. Read reviews, 
            view photos, and book tee times directly through the app. Build your 
            bucket list of must-play courses.
          </p>
        </section>

        <section className="feature">
          <h2>Always Connected</h2>
          <p>
            Sync across all your devices seamlessly. Share your best rounds on social 
            media. Get real-time weather updates and course conditions. Connect with 
            the golf community and share tips and experiences.
          </p>
        </section>

        <section className="cta">
          <h2>Ready to Elevate Your Game?</h2>
          <p>Download GreenTally today and start your journey to better golf.</p>
          <div className="button-group">
            <button className="cta-button">Download on iOS</button>
            <button className="cta-button">Download on Android</button>
          </div>
        </section> 
      </div>
    </div>
  );
}
