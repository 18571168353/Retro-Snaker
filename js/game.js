;(function () {
  var that
  function Game(map) {
    this.food = new Food()
    this.snake = new Snake()
    this.map = map
    that = this
  }
  Game.prototype.start = function () {
    this.food.render(this.map)
    this.snake.render(this.map)

    // 当蛇遇到边界游戏结束
    runSnake()
    // 通过键盘控制蛇移动的方向
    bindKey()
  }

  // 通过键盘控制蛇移动的方向
  function bindKey() {
    document.addEventListener(
      'keydown',
      function (e) {
        switch (e.keyCode) {
          case 37:
            that.snake.direction = 'left'
            break
          case 38:
            that.snake.direction = 'top'
            break
          case 39:
            that.snake.direction = 'right'
            break
          case 40:
            that.snake.direction = 'bottom'
            break
        }
      },
      false
    )
  }

  // 私有的函数,让蛇移动起来
  function runSnake() {
    var timerID = setInterval(function () {
      that.snake.move(that.food, that.map)
      that.snake.render(that.map)

      // 当蛇遇到边界游戏结束
      var maxX = that.map.offsetWidth / that.snake.width
      var maxY = that.map.offsetHeight / that.snake.height
      var headX = that.snake.body[0].x
      var headY = that.snake.body[0].y

      if (headX < 0 || headX >= maxX) {
        alert(`                                             游戏结束!

                                    你的得分为:${that.snake.body.length - 3}  真不错`)
        clearInterval(timerID)
      }
      if (headY < 0 || headY >= maxY) {
        alert(`                                             游戏结束!
        
                                    你的得分为:${that.snake.body.length - 3}  真不错`)
        clearInterval(timerID)
      }
    }, 150)
  }
  var start = document.querySelector('.star')
 
  window.Game = Game
})()
