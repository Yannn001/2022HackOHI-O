package com.hackHondaChallenge.O3.service;


class LinkedList {
    public Node head;

    public void add(String transp, double time, double cost){
        Node newNode = new Node(transp, time, cost);
        if (this.head == null) {
            this.head = newNode;
        } else {
            this.head.addNode(newNode);
        }
    }

    static class Node{
        private String transp;
        private double time;
        private double cost;
        private double importance = 1;
        public Node next;

        public Node(String transp, double time, double cost){
            this.transp = transp;
            this.time = time;
            this.cost = cost;
            this.next = null;
            this.importance = 1;
        }

        private void addNode(Node newNode){
            if (this.next==null){
                this.next = newNode;
            } else {
                this.next.addNode(newNode);
            }
        }

        public String getTrans(){
            return this.transp;
        }

        public double getTime(){
            return this.time;
        }

        public double getCost(){
            return this.cost;
        }
        public void setImportance(double importance){
            this.importance = importance;
        }
        public double getImportance(){
            return this.importance;
        }
    }
}
