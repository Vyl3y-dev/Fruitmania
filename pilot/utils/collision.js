export function isColliding(a, b) {
    const r1 = a.el.getBoundingClientRect(); // gets screen rectangles for two objects
    const r2 = b.el.getBoundingClientRect();
  return !(r1.right < r2.left || r1.left > r2.right || r1.bottom < r2.top || r1.top > r2.bottom);
}

//Standard AABB (Axis-Aligned Bounding Box) overlap test 
//returns true if the boxes touch or overlap