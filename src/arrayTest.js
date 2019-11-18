class ArrayTest {
  constructor(title) {
    this.links = [];
    this.linkString = '';
  }

  addShits = (title, href) => {
    this.links.push({
      title: title,
      href: href
    });
  };

  doShit = () => {
    console.log(this.links);

    this.links.forEach((link) => console.log(link));
  };
}

export default ArrayTest;
