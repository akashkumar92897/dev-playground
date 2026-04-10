#include <iostream>
#include <queue>
using namespace std;
int main(){
    //It is used so that priority is not the largest value.
    priority_queue<int, vector<int>, greater<int>> q;
    q.push(200);
    q.push(10);
    q.emplace(3);
    q.emplace(4000);

    while (!q.empty()){
        cout << q.top() << " "; // 3 10 200 4000
        q.pop();
    }
    cout << endl;
    return 0;
}