#include <iostream>
using namespace std;

void insertIth(int a[],int n,int i){
int key=a[i];
int j=i-1;
while(j>=0 && a[j]>key){
a[j+1]=a[j];
j=j-1;
}
a[j+1]=key;
}
void insSort(int a[],int n){
int i=1;
while(i<n){
insertIth(a,n,i);
i++;
}
}
void display(int a[],int n){
int i=0;
while(i<n){
cout<<a[i]<<", ";
i++;
}
cout<<endl;
}
int main(){
int arr[]={4,1,5,2,6,5,8,4,5,96,47};
int size=sizeof(arr)/sizeof(int);
display(arr,size);
insSort(arr,size);
display(arr,size);
}
