import { defineStore } from "pinia";



export const useModalStore = defineStore("modal", {
    state: () => ({
      alert: {
        state: false,
        title: "",
        icon: "",
        color_icon: "",
        background_color: "",
        content: "",
      },
      toast: {
        state: false,
        title: "",
        icon: "",
        color_icon: "",
        background_color: "",
        content: "",
      },
    }),
    actions: {
      toggleAlert(payload) {
         
              this.alert.state = !this.alert.state;
              this.alert.title = payload.title;
              this.alert.icon = payload.icon;
              this.alert.color_icon = payload.color_icon;
              this.alert.background_color = payload.background_color;
              this.alert.content = payload.content;
          
      },
  
      launchToast(payload) {
          if (this.toast.state === false) {
        this.toast.state = !this.toast.state;
        this.toast.title = payload.title;
        this.toast.icon = payload.icon;
        this.toast.color_icon = payload.color_icon;
        this.toast.background_color = payload.background_color;
        this.toast.content = payload.content;
  
        let self = this;
  
        setTimeout(function () {
          self.toast.state = !self.toast.state;
          self.toast.title = "";
          self.toast.content = "";
        }, 2500);
  
      }
      },
    },
  });


  