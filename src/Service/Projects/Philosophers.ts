import { PhotoPhilosophersMain } from "../../assets/images";
import { EProjects } from "../../enums/project-list.enum";
import { EPCategory, EPLanguage } from "../../enums/project.enum";
import { IProject } from "../../interfaces/project.interface";

export const Philosophers : IProject = {
  id : EProjects.Philosophers,
  title : "Philosophers",
  imagePath : PhotoPhilosophersMain,
  date : new Date("2020"),
  brief : "The Dining Philosophers Problem is an illustrative example of a common computing problem in concurrency.\nIt contains many concepts : Multiprocessing, Multithreading, Threads, Processes, Concurrency, Atomic operations, Interleavings, Parallelism, Semaphores, Mutexes, Race conditions, Data races.",
  githubLink : "https://github.com/ayoubHam2000/philosophers",
  categories : [
    EPCategory.Unix,
    EPCategory.Rigor,
    EPCategory.Concurrency,
    EPCategory.ImperativeProgramming,
  ],
  tools : [

  ],
  languages : [
    EPLanguage.C
  ],
}
