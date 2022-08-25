import React, { Component } from "react";
// prompt user to confirm refresh
// function forceRefresh(){
//   // 设置只强制刷行一次页面
//   if(location.href.indexOf('#reloaded')===-1){
//     location.href = location.href + '#reloaded';
//     window.location.reload(true);
//     // window.location.reload();
//   }else{
//     alert('请手动刷新页面！');
//   }
// }

const RedirectToHomePage = () => {
  window.history.pushState({}, "", "/");
  localStorage.clear();
  setTimeout(() => {
    window.location.reload();
  }, 100);
};
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    window.addEventListener("error", (e) => {
      console.log("something went wrong");
    });
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log("error has happedned", error);
    return {
      hasError: true,
      error,
      chunkError: /Loading( CSS)? chunk [\d]+ failed/.test("Loading chunk 8 failed"),
    };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({
      hasError: true,
      error,
      chunkError: /Loading( CSS)? chunk [\d]+ failed/.test("Loading chunk 8 failed"),
    });
    console.error("Error Boundary Caught:", error, errorInfo);
  }

  render() {
    const { error, hasError } = this.state;
    if (this.state.chunkError) {
      // return window.location.reload();
      return <RedirectToHomePage />;
    }
    if (error?.name === "ChunkLoadError") {
      // return window.location.reload();
      return <RedirectToHomePage />;
    }
    if (hasError) {
      // return window.location.reload();
      return <RedirectToHomePage />;
    }
    try {
      return this.props.children;
    } catch (e) {
      // return window.location.reload();
      return <RedirectToHomePage />;
    }
  }
}
