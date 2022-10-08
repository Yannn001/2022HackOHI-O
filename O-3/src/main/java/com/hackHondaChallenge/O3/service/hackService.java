package com.hackHondaChallenge.O3.service;

import org.springframework.stereotype.Service;

@Service
public interface hackService {
    public Integer compute(Integer i);
    public ListNode[] allRoute(String start, String end);
    public ListNode[] sortSolution(ListNode[] routes, boolean canDrive, boolean canWalk, boolean isStudent);
    public ListNode[] sort(ListNode[] arr, int from_Index, int to_Index);
}
