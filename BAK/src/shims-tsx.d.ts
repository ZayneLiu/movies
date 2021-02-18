import Vue, { VNode } from 'vue';
// import EventTarget from "";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode { }
    // interface EventTarget extends Event {
    //   [id: string]: any
    // }
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue { }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
