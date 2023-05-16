import Sketch from 'sketch-js'
// import { GUI } from 'dat-gui'
import Alea from 'alea'
import newArray from 'new-array'
import watercolor from './lib'

const container = document.body.appendChild(document.createElement('div'))
document.body.style.margin = 0

export function createWatercolorBackground(){
  const ctx = Sketch.create({
    container: container,
    autostart: false,
    autoclear: false
  })

  const settings = {
    colors: 3,
    shapePoints: 5,
    spread: 650,
    colorSize: 350,
    deformations: 2,
    layers: 55,
    randomSeed: 217,
    sigma: 2,
    blend: 'lighten',
    mask: true,
    maskCircles: 300,
    maskCircleSize: 50
  }

  let rand

  ctx.setup = ctx.resize = function () {
    rand = new Alea(settings.randomSeed)
    ctx.clearRect(0, 0, ctx.width, ctx.height)
    const canvasCenter = [ctx.width / 2, ctx.height / 2]
    const colors = newArray(settings.colors).map(() => {
      const color = [
        rand() * 256 | 0,
        rand() * 256 | 0,
        rand() * 256 | 0
      ]

      const rads = rand() * Math.PI * 2
      const dist = Math.pow(rand(), 0.5) * settings.spread
      const position = [
        Math.cos(rads) * dist + canvasCenter[0],
        Math.sin(rads) * dist + canvasCenter[1]
      ]
      return { color, position }
    })

    const params = Object.assign({}, settings, {
      randomFn: rand,
      context: ctx,
      colors: colors
    })
    const draw = watercolor(params)
    draw()
  }
}
