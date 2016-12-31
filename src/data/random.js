const random = {
  next() {
    return Math.random();
  },

  between(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(random.next() * (max - min)) + min;
  },

  pick(arr) {
    const i = random.between(0, arr.length);
    return arr[i];
  }
}

export default random;
