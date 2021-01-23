class God{
    /**
     * @returns Human[]
     */
      static create(){
        return [new Man, new Woman]
      }
    }

    class Human {}
    class Men extends Human {}
    class Woman extends Human {}