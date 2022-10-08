package com.hackHondaChallenge.O3.service;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@Service
public class hackServiceImp implements hackService {

    @Override
    public Integer compute(Integer i) {
        return i;
    }
    @Override
    public LinkedList[] allRoute(String start, String end){

    }
    @Override
    public LinkedList[] sort(LinkedList[] routes){
        LinkedList[] solution = new LinkedList[routes.length];



        return solution;
    }
    @Override
    public void sort(LinkedList[] arr, int from_Index, int to_Index){
        int[] importance = new int[arr.length];
        LinkedList temp = new LinkedList();

        for(int i = 0; i < arr.length; i++){
            while(arr[i] != null){
                importance[i] += arr[i].importance;
                arr[i] = arr[i].next;
            }
        }
        for(int i = 0; i < importance.length; i++){
            if()
        }
    }

}
