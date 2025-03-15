// src/components/RobotModel.js
import React, { useEffect } from 'react';
import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import { MeshStandardMaterial, Color,LoopOnce, LoopRepeat } from 'three';


export default function RobotModel() {
  // Load the model & animations from the GLTF file
  const { scene, animations } = useGLTF('/robot/source/robot.gltf');
  const { actions } = useAnimations(animations, scene);

  // Load textures if needed (update paths as required)
  const colorMap = useTexture('/robot/textures/robot_color_2.png');
  const normalMap = useTexture('/robot/textures/robot_normal_1.png');
  const emissiveMap = useTexture('/robot/textures/robot_emission_0.png');
  // If your metallic texture is causing issues, comment it out or check its path
  // const metallicMap = useTexture('/robot/textures/robot_metallic-robot_0.png');

  useEffect(() => {
    // Adjust position, scale, and rotation so the robot is smaller, upright, and facing the camera
    scene.position.set(-0.8, -2 -0.4);
    scene.scale.set(0.6, 0.6, 0.6);
    // Rotate 180° around Y-axis if the robot is showing its back
    scene.rotation.y = Math.PI;

    // Traverse meshes and apply a brighter material
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new MeshStandardMaterial({
          map: colorMap,           // using your color texture
          normalMap: normalMap,      // normal texture for surface details
          emissiveMap: emissiveMap,  // emissive texture if needed
          color: new Color('#F6BCCB'), // brighter, noticeable color (light pink)
          emissive: new Color("#ffffff"),
          metalness: 0.4,
          roughness: 0.5,
        });
      }
    });

        // Function to alternate between "attackspin" and "walking"
        const alternateAnimations = () => {
          // Define the two animations you want to alternate.
          const sequence = ['attackspin', 'walking'];
          let currentIndex = 0;
          
          const playNext = () => {
            // Stop all animations before playing the next one.
            Object.values(actions).forEach(action => action.stop());
            const animName = sequence[currentIndex];
            const action = actions[animName];
            if (action) {
              action.reset().fadeIn(0.3).setLoop(LoopOnce, 1).play();
              const duration = action._clip.duration * 1000;
              // After this animation finishes, wait 10 sec, then play the next one.
              setTimeout(() => {
                currentIndex = (currentIndex + 1) % sequence.length;
                playNext();
              }, duration + 10000);
            }
          };
          
          playNext();
        };
        
        // Play the hello animation first, then after it finishes and after a 10-sec delay,
        // alternate between "attackspin" and "walking".
        if (actions && actions['hello ']) {
          const helloAction = actions['hello'];
          helloAction.reset().fadeIn(0.3).setLoop(LoopRepeat, 2).play();
          const helloDuration = helloAction._clip.duration * 1000;
          setTimeout(() => {
            alternateAnimations();
          }, helloDuration + 3000);
        } else {
          // If "hello animation" isn't available, start alternating immediately.
          alternateAnimations();
        }
        
      }, [scene, actions, colorMap, normalMap, emissiveMap]);
    
      return <primitive object={scene} />;
    }