const Ball = function (ballType) {
  if (typeof ballType === "string") {
    this.ballType = ballType;
  } else {
    this.ballType = "regular";
  }
};
const ball1 = new Ball();
const ball2 = new Ball("super");
console.log(ball1.ballType);
console.log(ball2.ballType);
