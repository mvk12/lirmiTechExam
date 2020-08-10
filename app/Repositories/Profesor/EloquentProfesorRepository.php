<?php
namespace App\Repositories\Profesor;

use Illuminate\Database\Eloquent\ModelNotFoundException;

use App\Daos\ProfesorDao;
use App\Exceptions\RepositoryException;
use App\Profesor;

class EloquentProfesorRepository implements IProfesorRepository
{
    public function Create(ProfesorDao $profesorDao)
    {
        $model = new Profesor([
            'first_name' => $profesorDao->firstName,
            'last_name' => $profesorDao->lastName,
            'email' => $profesorDao->email,
        ]);

        try {
            $model->saveOrFail();

            return $model->toArray();
        } catch (\Exception $ex) {
            \Log::error(__FILE__);
            \Log::error($ex);

            throw new RepositoryException($ex->getMessage(), 500);
        }
    }

    public function Delete(int $profesorId)
    {
        try {
            return Profesor::findOrFail($profesorId)->delete();
        } catch (ModelNotFoundException $ex) {
            \Log::error(__FILE__);
            \Log::error($ex);

            throw new RepositoryException($ex->getMessage(), 404);
        } catch (\Exception $ex) {
            \Log::error(__FILE__);
            \Log::error($ex);

            throw new RepositoryException($ex->getMessage(), 500);
        }
    }
}
