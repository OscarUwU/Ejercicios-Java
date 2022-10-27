
function Reloj() {
    Reloj2(ctx, radius);
    Numeros(ctx, radius);
    Hora(ctx, radius);
}

function Reloj2(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(2, 2, radius, 2, 4*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.555);
    grad.addColorStop(0, 'black');
   
    grad.addColorStop(1, 'red');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = 'crimson';
    ctx.fill();
}

function Numeros(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius*0.1 + "px arial";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    for(num= 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
    for(num= 13; num < 25; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.65);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.65);
        ctx.rotate(-ang);
    }
}

function Hora(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    hour=hour%12;
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    Manecillas(ctx, hour, radius*0.5, radius*0.07);
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    Manecillas(ctx, minute, radius*0.8, radius*0.07);
    second=(second*Math.PI/30);
    Manecillas(ctx, second, radius*0.9, radius*0.02);
}

function Manecillas(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}