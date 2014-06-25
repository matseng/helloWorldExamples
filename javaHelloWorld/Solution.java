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
public class Solution {
    
  int N; 
  int L;
  int B;
  int C;

  public static void main(String args[] ) throws Exception {
    FileReader inputStream = new FileReader("input000.txt");
    BufferedReader br = new BufferedReader(inputStream);
    String line = br.readLine();
    int i = 0;
    while(line != null) {
      System.out.println(i);
      System.out.println(line);
      boolean isChunk = line.matches("\\d+,\\d+");
      if ( isChunk ) {
        System.out.println("chunk found");
        String[] strArr = line.split(",");
        System.out.println(strArr[0]); 
      } else {
        // System.out.println(line); 
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
