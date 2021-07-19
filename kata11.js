// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // Code here!
  let sphere = (4/3)*PI*radius*radius*radius;
  //console.log(sphere);
  return sphere;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  let cone = (1/3)*PI*(radius*radius)*height;
  return cone;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  let prism=(width*depth)*height;
  return prism;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!
  let sphere_area=0;
  let cone_area=0;
  let prism_area=0;
  //console.log(solids);
  for (let i=0; i<solids.length; i++){
    if (solids[i]['type']==='sphere'){
      //console.log(solids[i]['radius']);
      sphere_area =sphere_area + sphereVolume(solids[i]['radius']);
      //console.log(sphere_area);
    }else if(solids[i]['type']==='cone'){
      cone_area += coneVolume(solids[i]['radius'],solids[i]['height']);
      //console.log(cone_area);
    }
  }
  //console.log(sphere_area+cone_area);
  return (sphere_area+cone_area);
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);