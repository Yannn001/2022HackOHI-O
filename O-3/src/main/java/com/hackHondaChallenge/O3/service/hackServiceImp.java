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

        return new ListNode[0];
    }
    @Override
    public ListNode[] getSolution(ListNode[] routes, boolean canDrive, boolean canWalk, boolean isStudent){
        ListNode route = new ListNode();
        ListNode[] solution = new ListNode[routes.length];


        for(int i = 0; i < routes.length; i++){
            route = routes[i];

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

        solution = sort(routes, 0, routes.length);
        return solution;
    }
    @Override
    public ListNode[] sort(ListNode[] arr, int from_Index, int to_Index){
        int[] importance = new int[arr.length];
        ListNode temp = new ListNode();
        ListNode[] sorted = new ListNode[arr.length];

        for(int i = 0; i < arr.length; i++){
            sorted[i] = arr[i];
        }

        for(int i = 0; i < arr.length; i++){
            while(arr[i] != null){
                importance[i] += sorted[i].importance;
                arr[i] = sorted[i].next;
            }
        }
        for(int i = 0; i < importance.length; i++){
            for (int j = 0; j < importance.length - i - 1; j++){
                if(importance[j] < importance[j + 1]){
                    temp = sorted[j];
                    sorted[j] = sorted[j + 1];
                    sorted[j + 1] = temp;
                }
            }
        }
        return sorted;
    }

}
