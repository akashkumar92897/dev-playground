#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;
int main (){

    // Sorting algorithm
    
    // sort (arr , arr + n);
    int arr[] = {3, 6, 1, 7, 2, 8};
    sort(arr, arr + 6);
    for (int val : arr){
        cout << val << " ";
    }
    cout << endl;

    cout << "---------------------------------------------" << endl;
    
    // sort (vec.begin() , vec.end());
    vector <int> vec = {3, 6, 1, 7, 2, 8};
    sort(vec.begin(), vec.end());
    for (int val : vec){
        cout << val << " ";
    }
    cout << endl;

    cout << "---------------------------------------------" << endl;
    
    // sort (arr , arr + n, greater<int>());        =>      In descending order
    int arr2[] = {3, 6, 1, 7, 2, 8};
    sort(arr2, arr2 + 6, greater<int>());
    for (int val : arr2){
        cout << val << " ";
    }
    cout << endl;

    cout << "---------------------------------------------" << endl;

    // sort of vector of pair
    vector<pair<int, int>> vec1 = {{3, 1}, {2, 1}, {7, 1}, {5, 2}};
    sort(vec.begin(), vec.end());
    for (auto p: vec1){
        cout << p.first << " " << p.second << endl;
    }
    return 0;
}