  function MyButton(){
    return(
        <button> I'm a Button</button>
    );
  }

  //Using < myButton /> I can nest the button into another component

  export default function MyApp() {
    return (
        <div>
            <h2> Welcome to my app </h2>
            <MyButton />
        </div>
    );
  }

  // Notice that <MyButton /> starts with a capit al latter. That's how you know it's a React Component. React component names must always start with a capital letter, while HTML tags must be lowercase
  //The export default keywords specify the main component in the file. 

  // Your component can't return multiple JSX tags. You have to wrap them in a shared parent like a <div> </div> or <> </> wrapper

  //Adding Styles
  // In react you specify a 
  //CSS class with className (camel Case) 
  //ex <img className='avatar' />
  //Then you write the CSS rules for it in a separate CSS file. 

  //React does not prescribe how you add CSS files. In the simplestr case, you'll add a <link> tag to your html. 

  //STOPPED AT DISPLAYING DATA https://react.dev/learn