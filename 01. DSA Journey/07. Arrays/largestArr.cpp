#include <iostream>
#include <climits>
using namespace std;
int main (){
    int size = 6;
    int largest = INT_MIN;
    int index = 0;
    int nums[] = {5, 15, 22, -15, 1, 24};

    for (int i=0; i<size; i++){
        largest = max(nums[i], largest);
    }
    cout << "Largest value in Array: " << largest << endl;
    return 0;
}