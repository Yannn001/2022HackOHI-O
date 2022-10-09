package com.hackHondaChallenge.O3.service;

import org.springframework.stereotype.Service;


@Service
public class hackServiceImp implements hackService {

    @Override
    public Integer compute(Integer i) {
        return i;
    }
    @Override
    public ListNode[] allRoute(String start, String end){

        ListNode[] route = new ListNode[3];
        if (start.equals("Ohio Union") && end.equals("RPAC")){
            route = new ListNode[3];
            route[0] = new ListNode("drive", 3, 2);
            route[1] = new ListNode("walk", 10, 0);
            route[2] = new ListNode("walk", 11, 0);
        } else if (start.equals("Ohio Union") && end.equals("Dreese Lab")) {
            route = new ListNode[2];
            route[0] = new ListNode("walk", 11, 0);
            ListNode route_node = new ListNode("CABS", 5, 0);
            route_node.next = new ListNode("walk", 11, 0);
            route[1] = route_node;
        } else if (start.equals("99P Labs") && end.equals("Dreese Lab")){
            route = new ListNode[3];
            route[0] = new ListNode("walk", 31, 0);
            ListNode route_node_1 = new ListNode("COTA", 11, 2.5);
            route_node_1.next = new ListNode("walk", 10, 0);
            route[1] = route_node_1;
            ListNode route_node_2 = new ListNode("CABS", 5, 0);
            route_node_2.next = new ListNode("walk", 3, 0);
            route[2] = route_node_2;
        } else if (start.equals("99P Labs") && end.equals("RPAC")) {
            route = new ListNode[3];
            route[0] = new ListNode("walk", 31, 0);
            ListNode route_node_1 = new ListNode("COTA", 11, 2.5);
            route_node_1.next = new ListNode("walk", 10, 0);
            route[1] = route_node_1;
            ListNode route_node_2 = new ListNode("CABS", 17, 0);
            route_node_2.next = new ListNode("walk", 6, 0);
            route[2] = route_node_2;
        }

        return route;
    }
    @Override
    public ListNode[] getSolution(ListNode[] routes, boolean canDrive, boolean canWalk, boolean isStudent){
        ListNode[] solution = new ListNode[routes.length];
        ListNode route = new ListNode();
        ListNode[] copy = new ListNode[routes.length];

        for(int i = 0; i < routes.length; i++){
            copy[i] = routes[i];
        }

        for(int i = 0; i < routes.length; i++){
            route = copy[i];

            while(route != null){
                if(route.transp.equals("drive") && canDrive){
                    route.importance ++;
                }
                if(route.transp.equals("walk") && canWalk){
                    route.importance ++;
                }
                route = route.next;
            }
        }

        solution = sort(copy, 0, routes.length);
        return solution;
    }
    @Override
    public ListNode[] sort(ListNode[] arr, int from_Index, int to_Index){
        int[] importance = new int[arr.length];
        ListNode temp = new ListNode();
        ListNode[] sorted = new ListNode[arr.length];
        ListNode subsort1 = new ListNode();
        ListNode subsort2 = new ListNode();

        for(int i = 0; i < arr.length; i++){
            sorted[i] = arr[i];
        }

        for(int i = 0; i < sorted.length; i++){
            subsort1 = sorted[i];
            while(subsort1 != null){
                importance[i] += subsort1.importance;
                subsort1 = subsort1.next;
            }
        }
        for(int i = 0; i < importance.length; i++){
            for (int j = 0; j < importance.length - i - 1; j++){
                subsort1 = sorted[j];
                subsort2 = sorted[j + 1];
                if(importance[j] < importance[j + 1]){
                    temp = subsort1;
                    subsort1 = subsort2;
                    subsort2 = temp;
                }
            }
        }
        return sorted;
    }

}
