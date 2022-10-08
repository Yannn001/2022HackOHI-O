package com.hackHondaChallenge.O3.service;

import com.fasterxml.jackson.databind.util.LinkedNode;
import org.springframework.stereotype.Service;

import java.util.LinkedList;


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
    public void sortSolution(&ListNode[] routes, boolean canDrive, boolean canWalk, boolean isStudent){
        ListNode route = new ListNode();


        for(int i = 0; i < routes.length; i++){
            route = routes[i];

            while(route != null){
                if(route.transp.equals("Drive") && canDrive){
                    route.importance ++;
                }
                if(routes[i].transp.equals("walk") && canWalk){
                    routes[i].importance ++;
                }
                route = route.next;
            }
        }

        sort(routes, 0, routes.length - 1);
    }
    @Override
    public void sort(ListNode[] arr, int from_Index, int to_Index){
        int[] importance = new int[arr.length];
        ListNode temp = new ListNode();

        for(int i = 0; i < arr.length; i++){
            while(arr[i] != null){
                importance[i] += arr[i].importance;
                arr[i] = arr[i].next;
            }
        }
        for(int i = 0; i < importance.length; i++){
            if(importance[i] < importance[i + 1]){
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }

}
