package com.hackHondaChallenge.O3.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface hackService {
    public Integer compute(Integer i);
    public List<List<Map<String, Double>>> sortList(boolean canDrive, boolean canWalk,
                                                    boolean isStudent, List<List<Map<String, Double>>> route);
}
