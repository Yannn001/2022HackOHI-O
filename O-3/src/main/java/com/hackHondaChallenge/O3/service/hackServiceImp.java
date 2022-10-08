package com.hackHondaChallenge.O3.service;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class hackServiceImp implements hackService {

    @Override
    public Integer compute(Integer i) {
        return i;
    }
//
//    @Override
//    public List<List<Map<String, ArrayList<Double>>>> allRoute(String start, String destination){
//
//        if (start == "Ohio Union" && destination == "RPAC") {
//            // [[<"drive", [4, 0]>], [<"walk", [10, 0]>], [<"walk", [11, 0]>]]
//            List<Map<String, ArrayList<Double>>> route_list = new ArrayList<Map<String, ArrayList<Double>>>();
//            Map<String, ArrayList<Double>> solution_1 = new HashMap<String, ArrayList<Double>>();
//            solution_1.put("drive", new ArrayList<Double>(Array.asList(4, 0)));
//            Map<String, ArrayList<Double>> solution_2 = new HashMap<String, ArrayList<Double>>();
//            solution_2.put("walk", new ArrayList<Double>(Array.asList(10, 0)));
//            route_list.add(solution_1);
//            route_list.add(solution_2);
//            List<List<Map<String, ArrayList<Double>>>> route_1 = ;
//        }
//
//        return route;
//    }
//
//    @Override
//    public List<List<Map<String, ArrayList<Double>>>> sortList(boolean canDrive, boolean canWalk,
//                                                    boolean isStudent, List<List<Map<String, ArrayList<Double>>>> routes){
//        List<List<Map<String, ArrayList<Double>>>> result = new ArrayList<>();
//        boolean add = true;
//
//        next:
//        for(int i = 0; i < routes.size(); i++){
//            for(int j = 0; j < routes.get(i).size(); j++){
//                add = (routes.get(i).get(j).containsKey("drive") || !canDrive);
//                add = (routes.get(i).get(j).containsKey("walk") || !canWalk) && add;
//                if(isStudent){
//
//                }
//            }
//            if(add){
//                result.add(routes.get(i));
//            }
//        }
//        if(isStudent){
//
//        }
//
//        return result;
//    }
}
