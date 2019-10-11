import Vue from 'vue'


class node {
    constructor(url){
        this.url = url;   
    }
}

class rollback {

    add(url){
        let n = new node(url);

        if (this.head != null && this.head != undefined){
            this.head.last = n;
        }
        n.next = this.head;


        this.head = n;     //head  =>  node   
        n.last = this.head;

        this.length ++ ;


        if (this.foot == undefined){
            this.foot = n;
        }

        if (this.length > 5){
            this.foot = this.foot.last;
            this.foot.next = undefined;
        }
    }
    // add: (url) => {
    //     node = new node(url);

    //     node.next = this.head;
    //     this.head.last = node;

    //     this.head = node;     //head  =>  node   
    //     node.last = this.head;

    //     this.length ++ ;


    //     if (this.foot == undefined){
    //         this.foot = node;
    //     }

    //     if (this.length > 5){
    //         this.foot = this.foot.last;
    //         this.foot.next = undefined;
    //     }
    // },

    back () {
        if ( this.head != null && this.head != undefined ){  //当前节点不为空
            let n = this.head;
            this.head = this.head.next;
            this.length --;
            return n.url;
        }
    }

}




export default rollback
