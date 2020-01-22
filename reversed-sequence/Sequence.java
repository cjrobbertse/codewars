public class Sequence{
    public static int[] reverse(int n){
        int[] reverseSequence = new int[n];
        int x = 0; // counts the position in the array, (x < n)
        for (int i = n; i > 0; i--) {
            reverseSequence[x] = i;
            x++;
        }
        return reverseSequence;
    }

    public static void main(String[] args) {
        System.out.println(reverse(10));
    }
}



// n = number (n>0)
// return reversed sequence from n to 1.
// e.g n=5 >> [5,4,3,2,1]