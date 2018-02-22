@extends('errors.layout')

@section('title', 'Pages not found')

@section('message', $exception->getMessage())
