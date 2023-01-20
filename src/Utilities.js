import rand from 'random-seed';

export class Utilities
{
    static randomSeed()
    {
        if(Utilities.rng == null)
            return;

        Utilities.seed = Utilities.rng(1000);
        Utilities.rng.seed(Utilities.seed);
    }

    static randomSelect(array, seed=100)
    {
        if(Utilities.rng == null)
        {
            Utilities.seed = seed;
            Utilities.rng = rand.create(Utilities.seed);
        }

        Utilities.rng.seed(Utilities.seed);

        return array[Utilities.rng(array.length)];
    }
}