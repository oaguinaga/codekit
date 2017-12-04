document.onreadystatechange = function () {  
  if (document.readyState == "interactive") {
    const rootElement = document.getElementsByTagName('app-root')[0]
  

    example3 = new InlineCodeSuite({ 
      name: 'example-3',
      root: rootElement, 
      height: 400,
      editors: [
        {
          name: 'CSS',
          mode: 'css',
          value: 
`.container {
  /* Your code goes here */
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}`
        },
        {
          name: 'HTML',
          mode: 'htmlmixed',
          value: `
<div class="container">
  <div class="box"></div>
</div>`
        },
        {
          name: 'JS',
          mode: 'javascript',
          value: ``
        }
      ],
      preview: {
        styles: `
.box {
  background: lightcoral;
  width: 50px;
  height: 50px;
}

.container {
  background: #CCC;
  max-width: 960px;
  margin: 10% auto;
  min-height: 100vh;
}
        `,
        html: {
          pre: '',
          post: ''
        }
      },
      styles: [{
        type: "text/css",
        value: `
.box {
  color: red;
}     
        `,
        runButton: "Submit"
      }]
    })

  css = example3.getCurrentEditorData();
  console.log(css);
  }

}




