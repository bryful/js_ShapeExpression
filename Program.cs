using System;
using System.IO;

namespace aeclip
{
    class Program
    {
        enum CLIP
        {
            NONE =0,
            COPY,
            PASTE
        }
        static void usage()
        {
            string mes = "aeclip.exe \r\n"
                + "\t aeclip /c filename (copy to clipboard)\r\n"
                + "\t aeclip /p filename (from clipboard to STD)\r\n";
            Console.Write(mes);
        }
        static CLIP CmdArgs(string[] args)
        {
            CLIP ret = CLIP.NONE;
            if (args.Length <= 0) return ret;

            return ret;
        }
        static void Main(string[] args)
        {
            //Console.WriteLine("Hello World!");
            CLIP mode = CmdArgs(args);

            switch(mode)
            {
                case CLIP.NONE:
                    usage();
                    break;
                case CLIP.COPY:
                    break;
                case CLIP.PASTE:
                    break;
            }
            Console.WriteLine("a");
            Console.ReadKey();
        }
    }
}
