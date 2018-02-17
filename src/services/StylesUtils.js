let _this  = {};


_this =  {
  TYPE: {
    GRADIENT: {
      LINEAR: 'LINEAR',
      RADIAL: 'RADIAL',
    },
  },

  gradient: ({ color1, color2, type = _this.TYPE.GRADIENT.LINEAR, angle = 60 }) => {
    return type === _this.TYPE.GRADIENT.LINEAR
      ? (`linear-gradient(${angle}deg, ${color1}, ${color2})`)
      : (type === _this.TYPE.GRADIENT.RADIAL
        ? (`radial-gradient(${color1}, ${color2})`)
        : ''
      )
  },
};


export default _this;
