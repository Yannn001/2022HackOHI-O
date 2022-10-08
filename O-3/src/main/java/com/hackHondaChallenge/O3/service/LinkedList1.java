class ListNode {
    String transp;
    double time;
    double cost;
    double importance = 1;
    ListNode next;

    ListNode() {
    }

    ListNode(String transp, double time, double cost) {
        this.transp = transp;
        this.time = time;
        this.cost = cost;
        this.next = null;
        this.importance = 0;
    }

    ListNode(String transp, double time, double cost, ListNode next){
        this.transp = transp;
        this.time = time;
        this.cost = cost;
        this.next = null;
        this.importance = 0;
        this.next = next;
    }
}