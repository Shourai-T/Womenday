import * as THREE from 'three';
import { gsap } from 'gsap';
import { Howl } from 'howler';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import lyricsData from './lyrics';

// DOM Elements
const app = document.getElementById('app');
const loading = document.getElementById('loading');
const canvas = document.getElementById('bg');
const toggleSoundBtn = document.getElementById('toggleSound');
const specialButton = document.getElementById('specialButton');
const giftModal = document.getElementById('gift-modal');
const closeGiftBtn = document.getElementById('closeGift');


const songTitle = document.getElementById('songTitle');
const songLyrics = document.getElementById('songLyrics');
const songBoxes = document.querySelectorAll('.song-box');
const songLyricsContainer = document.getElementById('songLyricsContainer');

// Songs data
const songs = [
  {
    title: "FEIN",
    src: "/Womenday/FEIN.mp3",
    lyrics: lyricsData["FEIN"] || 'Searching...',
    image: "fein.jpg"
  },
  {
    title: "Khế ước",
    src: "/Womenday/KheUoc.mp3",
    lyrics: lyricsData['Khế Ước'] || 'Searching...',
    image: "khe-uoc.jpg"
  },
  {
    title: "Cơn mưa xa dần",
    src: "/Womenday/ConMuaXaDan.mp3",
    lyrics: lyricsData['Cơn mưa xa dần'] || 'Searching...',
    image: "con-mua.jpg"
  }
];

// // Audio
// const bgMusic = new Howl({
//   src: ['/Womenday/FEIN.mp3'],
//   loop: true,
//   volume: 0.5,
//   autoplay: false, // Ban đầu không autoplay để tránh lỗi
//   mute: true
// });

let currentSongIndex = 0;
let bgMusic = new Howl({
  src: [songs[currentSongIndex].src],
  loop: true,
  volume: 0.5,
  autoplay: false,
  mute: false,
  onplay: updateLyrics
});

// Cập nhật lyrics và tiêu đề khi bài hát phát
// function updateLyrics() {
//   songTitle.textContent = songs[currentSongIndex].title;
//   songLyrics.textContent = songs[currentSongIndex].lyrics;
  
//   // Hiệu ứng chữ chạy
//   gsap.fromTo(songLyrics, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });

//   // Highlight bài hát đang phát
//   songBoxes.forEach((box, index) => {
//     box.classList.toggle('active', index === currentSongIndex);
//   });
// }


let lyricTimeout; // Biến lưu timeout để có thể xóa khi đổi bài

function displayLyrics(lyrics) {
  const lyricsContainer = document.getElementById("songLyrics"); // Lấy phần hiển thị lyrics
  lyricsContainer.innerHTML = ""; // Xóa lyrics cũ

  let currentIndex = 0; // Bắt đầu từ câu đầu tiên
  const startTime = Date.now(); // Thời điểm bắt đầu bài hát

  function showNextLine() {
    if (currentIndex >= lyrics.length) {
      return; // Kết thúc nếu hết lyrics
    }

    // Tính thời gian chờ dựa vào `time` của câu hiện tại
    const currentTime = Date.now() - startTime;
    const nextTime = lyrics[currentIndex].time * 1000;
    const delay = Math.max(nextTime - currentTime, 0); // Đảm bảo không có thời gian âm

    lyricTimeout = setTimeout(() => {
      lyricsContainer.innerHTML = ""; // Xóa câu trước đó
      const lineElement = document.createElement("p");
      lineElement.textContent = lyrics[currentIndex].text;
      lineElement.classList.add("lyric-line");
      lyricsContainer.appendChild(lineElement);

      // Animation xuất hiện
      gsap.fromTo(lineElement, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });

      currentIndex++; // Chuyển sang câu tiếp theo
      showNextLine(); // Gọi lại hàm để tiếp tục hiển thị câu tiếp theo
    }, delay);
  }

  showNextLine(); // Bắt đầu hiển thị câu đầu tiên
}


function updateLyrics() {
  const songTitle = document.getElementById("songTitle");
  songTitle.textContent = songs[currentSongIndex].title;

  const lyrics = songs[currentSongIndex].lyrics;
    songBoxes.forEach((box, index) => {
    box.classList.toggle('active', index === currentSongIndex);
  });
  clearTimeout(lyricTimeout);

  displayLyrics(lyrics);
}



// Hàm đổi bài hát
function changeSong(index) {
  if (index === currentSongIndex) return; // Không đổi nếu chọn bài đang phát

  // Dừng bài hát cũ
  bgMusic.stop();

  // Cập nhật index bài hát mới
  currentSongIndex = index;

  // Tạo đối tượng Howl mới cho bài hát mới
  bgMusic = new Howl({
    src: [songs[currentSongIndex].src],
    loop: true,
    volume: 0.5,
    autoplay: true,
    mute: false,
    onplay: updateLyrics
  });

  // Phát bài hát mới
  bgMusic.play();
}

// Xử lý đổi bài hát khi click vào ô vuông
songBoxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    changeSong(index);
  });
});

const clickSound = new Howl({
  src: ['/Womenday/https://assets.mixkit.co/sfx/preview/mixkit-interface-click-1126.mp3'],
  volume: 1
});

const giftSound = new Howl({
  src: ['/Womenday/https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-1936.mp3'],
  volume: 1
});

// // Cập nhật lyrics và tiêu đề khi bài hát phát
// function updateLyrics() {
//   songTitle.textContent = songs[currentSongIndex].title;
//   songLyrics.textContent = songs[currentSongIndex].lyrics;
  
//   // Hiệu ứng chữ chạy
//   gsap.fromTo(songLyrics, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });

//   // Highlight bài hát đang phát
//   songBoxes.forEach((box, index) => {
//     box.classList.toggle('active', index === currentSongIndex);
//   });
// }

// // Xử lý đổi bài hát khi click vào ô vuông
// songBoxes.forEach((box) => {
//   box.addEventListener('click', () => {
//     currentSongIndex = parseInt(box.dataset.index);
//     bgMusic.stop();
//     bgMusic.src = [songs[currentSongIndex].src];
//     bgMusic.play();
//   });
// });

// Three.js Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
  antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xff4d6d, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0xff8fa3, 1);
pointLight2.position.set(-5, -5, 5);
scene.add(pointLight2);

// Heart Particles
const heartShape = new THREE.Shape();
const x = 0, y = 0;
heartShape.moveTo(x + 5, y + 5);
heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);

const heartGeometry = new THREE.ShapeGeometry(heartShape);
const heartMaterial = new THREE.MeshStandardMaterial({ 
  color: 0xff4d6d,
  emissive: 0xff8fa3,
  emissiveIntensity: 0.3,
  side: THREE.DoubleSide
});

const hearts = [];
const createHeart = () => {
  const heart = new THREE.Mesh(heartGeometry, heartMaterial);
  
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  heart.position.set(x, y, z);
  
  const scale = Math.random() * 0.05 + 0.02;
  heart.scale.set(scale, scale, scale);
  
  heart.rotation.x = Math.random() * Math.PI;
  heart.rotation.y = Math.random() * Math.PI;
  heart.rotation.z = Math.random() * Math.PI;
  
  scene.add(heart);
  hearts.push({
    mesh: heart,
    speed: Math.random() * 0.05 + 0.01,
    rotationSpeed: Math.random() * 0.01 + 0.005
  });
};

// Create hearts
Array(50).fill().forEach(createHeart);

// Rose Petals
const petalGeometry = new THREE.PlaneGeometry(1, 1);
const petalTexture = new THREE.TextureLoader().load('https://i.imgur.com/Imf5Mtu.png');
const petalMaterial = new THREE.MeshStandardMaterial({
  map: petalTexture,
  transparent: true,
  side: THREE.DoubleSide
});

const petals = [];
const createPetal = () => {
  const petal = new THREE.Mesh(petalGeometry, petalMaterial);
  
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  petal.position.set(x, y, z);
  
  const scale = Math.random() * 2 + 1;
  petal.scale.set(scale, scale, scale);
  
  petal.rotation.x = Math.random() * Math.PI;
  petal.rotation.y = Math.random() * Math.PI;
  petal.rotation.z = Math.random() * Math.PI;
  
  scene.add(petal);
  petals.push({
    mesh: petal,
    speed: Math.random() * 0.03 + 0.01,
    rotationSpeed: Math.random() * 0.01 + 0.005
  });
};

// Create petals
Array(30).fill().forEach(createPetal);

// Stars
const starGeometry = new THREE.SphereGeometry(0.25, 24, 24);
const starMaterial = new THREE.MeshStandardMaterial({ 
  color: 0xffffff,
  emissive: 0xffd700,
  emissiveIntensity: 0.5
});

const stars = [];
const createStar = () => {
  const star = new THREE.Mesh(starGeometry, starMaterial);
  
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  
  scene.add(star);
  stars.push({
    mesh: star,
    pulse: Math.random() * Math.PI,
    pulseSpeed: Math.random() * 0.02 + 0.01
  });
};

// Create stars
Array(100).fill().forEach(createStar);

// Mouse movement for parallax effect
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

document.addEventListener('mousemove', (event) => {
  mouseX = (event.clientX - windowHalfX);
  mouseY = (event.clientY - windowHalfY);
});

// Click effect - create floating hearts
document.addEventListener('click', (event) => {
  // Don't create hearts when clicking on buttons or inputs
  if (event.target.tagName === 'BUTTON' || 
      event.target.tagName === 'INPUT' || 
      event.target.tagName === 'TEXTAREA') {
    return;
  }
  
  clickSound.play();
  
  // Create a heart at click position
  const heart = new THREE.Mesh(heartGeometry, heartMaterial);
  
  // Convert screen coordinates to 3D space
  const vector = new THREE.Vector3(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1,
    0.5
  );
  
  vector.unproject(camera);
  const dir = vector.sub(camera.position).normalize();
  const distance = -camera.position.z / dir.z;
  const pos = camera.position.clone().add(dir.multiplyScalar(distance));
  
  heart.position.copy(pos);
  heart.scale.set(0.05, 0.05, 0.05);
  
  scene.add(heart);
  
  // Animate the heart
  gsap.to(heart.position, {
    y: heart.position.y + 5,
    duration: 2,
    ease: "power1.out",
    onComplete: () => {
      scene.remove(heart);
    }
  });
  
  gsap.to(heart.scale, {
    x: 0,
    y: 0,
    z: 0,
    duration: 2,
    ease: "power1.out"
  });
  
  gsap.to(heart.rotation, {
    z: heart.rotation.z + Math.PI * 2,
    duration: 2,
    ease: "power1.out"
  });
});

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  
  // Update camera position based on mouse movement (parallax effect)
  targetX = mouseX * 0.001;
  targetY = mouseY * 0.001;
  
  camera.position.x += (targetX - camera.position.x) * 0.05;
  camera.position.y += (-targetY - camera.position.y) * 0.05;
  camera.lookAt(scene.position);
  
  // Animate hearts
  hearts.forEach((heart) => {
    heart.mesh.position.y += heart.speed;
    heart.mesh.rotation.x += heart.rotationSpeed;
    heart.mesh.rotation.y += heart.rotationSpeed;
    heart.mesh.rotation.z += heart.rotationSpeed;
    
    // Reset position when heart goes out of view
    if (heart.mesh.position.y > 50) {
      heart.mesh.position.y = -50;
    }
  });
  
  // Animate petals
  petals.forEach((petal) => {
    petal.mesh.position.y -= petal.speed;
    petal.mesh.rotation.x += petal.rotationSpeed;
    petal.mesh.rotation.y += petal.rotationSpeed;
    petal.mesh.rotation.z += petal.rotationSpeed;
    
    // Reset position when petal goes out of view
    if (petal.mesh.position.y < -50) {
      petal.mesh.position.y = 50;
    }
  });
  
  // Animate stars (pulsing effect)
  stars.forEach((star) => {
    star.pulse += star.pulseSpeed;
    const scale = 0.25 + Math.sin(star.pulse) * 0.1;
    star.mesh.scale.set(scale, scale, scale);
  });
  
  renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// // Khi người dùng nhấn nút tắt/mở âm thanh
// toggleSoundBtn.addEventListener('click', () => {
//   clickSound.play();
  
//   if (bgMusic.playing()) {
//     bgMusic.pause();
//     toggleSoundBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
//   } else {
//     bgMusic.play();
//     bgMusic.mute(false); // Bỏ mute nếu trước đó bị tắt
//     toggleSoundBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
//   }
// });

// Nút tắt/mở nhạc
toggleSoundBtn.addEventListener('click', () => {
  if (bgMusic.playing()) {
    bgMusic.pause();
    songLyricsContainer.classList.add('hidden');
    toggleSoundBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';

  } else {
    bgMusic.play();
    bgMusic.mute(false);
    songLyricsContainer.classList.remove('hidden');
    toggleSoundBtn.innerHTML = '<i class="fas fa-volume-up"></i>';

  }
});

specialButton.addEventListener('click', () => {
  clickSound.play();
  giftModal.classList.remove('hidden');
  
  // Animate gift box opening
  setTimeout(() => {
    giftSound.play();
    document.querySelector('.gift-lid').style.transform = 'rotateX(-180deg)';
    
    // Show gift message
    setTimeout(() => {
      document.querySelector('.gift-message').style.opacity = '1';
      
      // Create fireworks effect
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          createFirework();
        }, i * 100);
      }
    }, 1000);
  }, 500);
});

closeGiftBtn.addEventListener('click', () => {
  clickSound.play();
  giftModal.classList.add('hidden');
  
  // Reset gift animation
  document.querySelector('.gift-lid').style.transform = 'rotateX(0)';
  document.querySelector('.gift-message').style.opacity = '0';
});


// createMessageBtn.addEventListener('click', () => {
//   clickSound.play();
  
//   const name = recipientNameInput.value.trim() || 'Beautiful';
//   const message = personalMessageInput.value.trim() || 'Wishing you a wonderful Women\'s Day filled with joy, love, and appreciation. You are amazing!';
  
//   cardName.textContent = name;
//   cardMessage.textContent = message;
  
//   personalCard.classList.remove('hidden');
  
//   // Scroll to card
//   setTimeout(() => {
//     personalCard.scrollIntoView({ behavior: 'smooth' });
//   }, 100);
  
//   // Update share links
//   const shareText = `Happy International Women's Day to ${name}! ${message}`;
//   const shareUrl = encodeURIComponent(window.location.href);
//   const shareTextEncoded = encodeURIComponent(shareText);
  
//   shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareTextEncoded}`;
//   shareTwitter.href = `https://twitter.com/intent/tweet?text=${shareTextEncoded}&url=${shareUrl}`;
//   shareInstagram.href = `https://www.instagram.com/`;
// });

// Firework effect
function createFirework() {
  const colors = [0xff4d6d, 0xff8fa3, 0xffb3c1, 0xffd700, 0xffffff];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  const geometry = new THREE.SphereGeometry(0.1, 8, 8);
  const material = new THREE.MeshStandardMaterial({ 
    color: color,
    emissive: color,
    emissiveIntensity: 1
  });
  
  // Position near the gift box
  const x = (Math.random() - 0.5) * 10;
  const y = Math.random() * 5 + 5;
  const z = (Math.random() - 0.5) * 10;
  
  // Create particles
  for (let i = 0; i < 20; i++) {
    const particle = new THREE.Mesh(geometry, material);
    particle.position.set(x, y, z);
    scene.add(particle);
    
    // Random direction
    const speed = {
      x: (Math.random() - 0.5) * 0.3,
      y: (Math.random() - 0.5) * 0.3,
      z: (Math.random() - 0.5) * 0.3
    };
    
    // Animate particle
    gsap.to(particle.position, {
      x: particle.position.x + speed.x * 20,
      y: particle.position.y + speed.y * 20,
      z: particle.position.z + speed.z * 20,
      duration: 2,
      ease: "power2.out",
      onComplete: () => {
        scene.remove(particle);
      }
    });
    
    gsap.to(particle.scale, {
      x: 0,
      y: 0,
      z: 0,
      duration: 2,
      ease: "power2.in"
    });
  }
}

// Khi trang web tải xong, cố gắng bật nhạc
window.addEventListener('load', () => {
  setTimeout(() => {
    loading.style.display = 'none';
    app.classList.remove('hidden');

    // Chạy animation Three.js
    animate();

    // Tự động bật nhạc sau khi trang load xong
    bgMusic.play();
    
    // Khi người dùng click, bỏ mute và cho nhạc chạy
    document.addEventListener('click', () => {
      if (bgMusic.mute()) {
        bgMusic.mute(false);
      }
    });

  }, 2000);
});
