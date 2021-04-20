class roof
{
	constructor(x,y,weight,height)
	{
		var options ={
			isStatic:true			
			}
		this.x = x;
		this.y = y;
		this.weight = weight
		this.height = height
		this.body = Bodies.rectangle(x, y, weight, height , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			fill(128,128,128)
			rect(0,0,this.weight, this.height);
			pop()
			
	}

}