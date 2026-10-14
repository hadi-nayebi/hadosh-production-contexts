type Point={x:number;y:number};
/** Affine shear along Y, leaving every point on the attachment seam fixed. */
export function pinnedSeamMatrix(seam:[Point,Point],degrees:number){
 const [a,b]=seam, length=Math.hypot(b.x-a.x,b.y-a.y);
 const nx=(b.y-a.y)/length,ny=-(b.x-a.x)/length,k=Math.tan(degrees*Math.PI/180);
 return [1,k*nx,0,1+k*ny,0,-k*(nx*a.x+ny*a.y)] as const;
}
