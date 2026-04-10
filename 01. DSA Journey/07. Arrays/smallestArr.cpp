#include <iostream>
#include <climits>
using namespace std;
int main (){
    int size = 6;
    int smallest = INT_MAX;
    int index = 0;
    int nums[] = {5, 15, 22, -15, 1, 24};

    for (int i=0; i<size; i++){
        smallest = min(nums[i], smallest);
    //     if (nums[i] < smallest){
    //         smallest = nums[i];
    //         index = i;
        // }

    }
    cout << "Smallest value in Array: " << smallest << endl;
    // cout << "Index of " << smallest << " is: " << index << endl;
    return 0;
}