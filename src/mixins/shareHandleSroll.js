export const shareHandleSroll = {
    methods: {
        handleScroll(event){
            let currScroll = document.documentElement.scrollHeight - window.scrollY;
            if((currScroll - window.innerHeight) < 40) {
              let numPostsDisplay = this.postsDisplay.length;
              if(numPostsDisplay < this.posts.length ){
                this.postsDisplay.push(this.posts[numPostsDisplay]);
              }
            }
        }
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
}