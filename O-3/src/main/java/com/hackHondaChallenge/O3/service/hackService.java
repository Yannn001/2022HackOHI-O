package com.hackHondaChallenge.O3.service;

import org.springframework.stereotype.Service;

import java.util.LinkedList;

@Service
public interface hackService {
    public Integer compute(Integer i);
    public ListNode[] allRoute(String start, String end);
    public void sortSolution(ListNode[] routes, boolean canDrive, boolean canWalk, boolean isStudent);
    public void sort(ListNode[] arr, int from_Index, int to_Index)
}
