(function() {
    if (typeof Mario === 'undefined')
    window.Mario = {};
  
    //props do even less than entities, so they don't need to inherit really
    var Score = Mario.Score = function() {
        this.score = 0;
    }
  
    //but we will be using the same Render, more or less.
    Score.prototype.render = function(ctx) {
        ctx.font="12px";
        ctx.fillStyle="white";
      ctx.fillText(this.score,10,20);
    }
    Score.prototype.update = function(points) {
       this.score += points;
    }
  })();
  