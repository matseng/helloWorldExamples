// http://tutorials.jenkov.com/java-io/inputstreamreader.html
  // InputStream inputStream = new FileInputStream("c:\\data\\input.txt");
  // Reader      reader      = new InputStreamReader(inputStream);

  // int data = reader.read();
  // while(data != -1){
  //     char theChar = (char) data;
  //     data = reader.read();
  // }

  // reader.close();  

// https://www.hackerrank.com/environment
  // import java.io.*;
  // public class Solution {
  //     public static void main(String args[] ) throws Exception {
  //         BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  //         String line = br.readLine();
  //         int N = Integer.parseInt(line);
  //         for (int i = 0; i < N; i++) {
  //             System.out.println("hello world");
  //         }
  //     }
  // }


//matseng: My combined solution to read each line of a file is below.
  //To compile and run: $ javac Solution.java; java Solution
import java.io.*;
import java.util.ArrayList;
public class Solution {
    
  public int N; 
  public int L;
  public int B;
  public int C;
  public ArrayList<int[]> chunks = new ArrayList<int[]>();
  public Solution() {};  //contructor method

  public static void main(String args[] ) throws Exception {
    FileReader inputStream = new FileReader("input000.txt");
    BufferedReader br = new BufferedReader(inputStream);
    String line = br.readLine();
    int i = 0;
    Solution s = new Solution();
    while(line != null) {
      System.out.println(i);
      System.out.println(line);
      boolean isChunk = line.matches("\\d+,\\d+");
      if (i == 0)
        s.N = Integer.parseInt(line);
      else if (i == 1)
        s.L = Integer.parseInt(line);
      else if (i == 2)
        s.B = Integer.parseInt(line);
      else if (i == 3)
        s.C = Integer.parseInt(line);
      else if ( isChunk ) {
        System.out.println("chunk found");
        String[] strArr = line.split(",");
        System.out.println(strArr[0]); 
        int[] chunk = new int[2];
        chunk[0] = Integer.parseInt(strArr[0]);
        chunk[1] = Integer.parseInt(strArr[1]);
      } 
      line = br.readLine();
      i++;
    }
    br.close();
  }
}

//OUTPUT:
// 2000
// 15
// 10
// 7
// 0,200
// 200,400
// 400,600
// 600,800
// 800,1000
// 1000,2000
// 0,1800
