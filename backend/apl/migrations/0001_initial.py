# Generated by Django 2.1.5 on 2019-01-18 07:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comand',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('city', models.CharField(max_length=20)),
                ('founding_date', models.IntegerField()),
                ('manager', models.CharField(max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('goals', models.IntegerField()),
                ('assist', models.IntegerField()),
                ('comand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='apl.Comand')),
            ],
        ),
    ]
