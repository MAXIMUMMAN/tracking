module.exports = {
  "css": {
    "loaderOptions": {
      "scss": {
        "prependData": '@import "@/assets/sass/style.scss";'
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}