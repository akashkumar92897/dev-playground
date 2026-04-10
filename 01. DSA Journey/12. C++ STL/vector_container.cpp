#include <iostream>
#include <vector>
using namespace std;
int main (){
    //Pre-initialized Vector
    vector<char> vec1 = {'a', 'b', 'c', 'd'};
    for (char val: vec1){
        cout << val << " "; //a b c d
    }
    cout << endl;
    
    //--------------------------------------------------------------------------------------
    
    //Vector of X size with single element at all idx.
    vector<int> vec2(3,5);
    for (int val: vec2){
        cout << val << " "; //5 5 5
    }
    cout << endl;

    //--------------------------------------------------------------------------------------

    //Initialise a vector with the values of another vector
    vector<char> vec3(vec1);
    for (int val: vec3){
        cout << val << " "; //97 98 99 100
    }
    cout << endl;

    //--------------------------------------------------------------------------------------

    vector<int> vec; //Size=0
    vec.push_back(1);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(4);
    vec.emplace_back(5);

    vec.pop_back();

    cout << vec.size()<< endl;  //4
    cout << vec.capacity()<< endl; //8
    
    for (int val: vec){
        cout << val << " "; //1 2 3 4
    }
    cout << endl;

    cout << "Value at idx 3: " << vec[3] << endl; //4
    cout << "Value at idx 0: " << vec.front() << endl; //1
    cout << "Value at idx (n-1): " << vec.back() << endl; //4

    vec.erase(vec.begin()); //removes value at idx 0 = 1;
    vec.insert(vec.begin() + 3, 100);

    cout << vec.size()<< endl;  //4
    cout << vec.capacity()<< endl; //8

    vec.clear();
    cout << vec.empty() << endl; // 1

    cout << vec.size()<< endl;  //0
    cout << vec.capacity()<< endl; //8

    return 0;
}