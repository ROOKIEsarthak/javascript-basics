/* 

---> event propagation - refers to the mechanism by which the events are transmitted through the html DOM heirarchy .
in web development event propagation involved two phases 

event capturing and event bubbling


1 -> Event capturing -: the event is captured from the outermost element and propagates through its ancestors down to the target element .

2 -> Target phase -: once the event reaches the target element , it triggers the event listeners attached to that element .

3 -> Event bubbling -: after the event has be handled by the target element , 
    it goes to the bubbling phase where it goes back through its ancestors 
    back to the root of the DOM tree.


*/

/*

## Life Cycle methods -: 

These are  special methods in react class components that are invoked 
at specific points in a components lifecycle. 
These methods allow you to perform actions or 
execute code at different stages of a components existence , such as 
when it is mounted to or unmounted from the DOM , 
or when it updates due to changes in props


there are majorly 3 lifecyle methods -

-> mounting 

-> updating 

-> deleting/unmounting 


1-: mounting ->

* constructor() -: this method is called before a component is mounted , 
    used to initialize state and binding/assigning event handlers

* componentDidMount() -: this method has been called after a component has been mounted 
    to the DOM . Its commonly used for performing tasks such as fetching data from the API
    etc

2-: updating ->

* static getDerivedStateFromProps()-: this method is invoked right before calling the 
    render function both on the initial mount and on subsequent mount updates too .
    it updates the state based on the changes in props .

* shouldComponentUpdate()-: this method determines whether the component should re-render
    based on the changes in props or state

* render(): The render method is responsible for rendering the component's JSX markup.

* getSnapshotBeforeUpdate(): This method is called right 
    before the changes from the virtual DOM are to be reflected 
    in the DOM. It allows you to capture some information from 
    the DOM (e.g., scroll position) before it potentially changes.

* componentDidUpdate(): This method is called after the component 
    has been re-rendered 
    due to changes in props or state. 
    It's commonly used for performing side effects after an update.


3-: Unmounting:

* componentWillUnmount(): This method is called just before the component 
    is unmounted and destroyed. It's used for cleanup tasks such as 
    unsubscribing from external data sources or removing event listeners.

*/
