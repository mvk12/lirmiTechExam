<?php
namespace App\Daos;

class ProfesorDao
{
    public $firstName = null;
    public $lastName = null;
    public $email = null;

    public function __set($prop, $value)
    {
        if (property_exists($this, $prop)) {
            $this->{$prop} = $value;
        }
    }

    public function __get($prop)
    {
        return property_exists($this, $prop) ? $this->{$prop} : null;
    }

    public final function toArray()
    {
        return json_decode($this->__toString(), true);
    }

    final public function __toString()
    {
        return json_encode($this);
    }
}
