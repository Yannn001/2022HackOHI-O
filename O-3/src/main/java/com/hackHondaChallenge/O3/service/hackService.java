package com.hackHondaChallenge.O3.service;

import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.*;

@Service
public interface hackService {
    public Integer compute(Integer i);
    public LinkedList[] allRoute(String start, String end);
    public LinkedList[] sort(LinkedList[] routes);
    public void sort(int[] arr, int from_Index, int to_Index);
    void sort(LinkedList[] arr, int from_Index, int to_Index);
}
