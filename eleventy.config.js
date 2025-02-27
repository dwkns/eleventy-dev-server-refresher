
module.exports = (eleventyConfig) => {


  eleventyConfig.setServerOptions({
    onRequest: {
      "/reload/:template": function ({ url, pattern, patternGroups }) {
        const template = atob(patternGroups.template) // decode the b64 encocded string
        console.log("Someone clicked the `Tell the Dev Server to do stuff` button")
        console.log(`template: ${template} was passed back from the served page`) // tells us which template needs to change
       
        // code to reprocess data cascade
        // code to rebuild template
       
        return "Nothing to see here" 
      }
    }
  });


  return {
    dir: {
      input: "src",
    },
  };
};